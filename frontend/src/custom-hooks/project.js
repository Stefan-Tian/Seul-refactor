import { useMutation } from '@apollo/react-hooks';
import { PROJECTS } from '../query';
import moment from 'moment';
import {
  CREATE_TASK,
  CREATE_PROJECT,
  DELETE_PROJECT,
  DELETE_TASK
} from '../mutation';

export const useCreateTask = (projectId = null) => {
  const [createTask, { loading }] = useMutation(CREATE_TASK, {
    optimisticResponse: {
      __typename: 'Mutation',
      createTask: {
        __typename: 'createTask',
        id: '123455',
        title: 'New Task',
        priority: 0,
        status: 0,
        startDate: moment(),
        endDate: moment().add(1, 'days')
      }
    },
    update: (cache, { data: { createTask } }) => {
      const data = cache.readQuery({ query: PROJECTS });
      if (!projectId) {
        data.projects[data.projects.length - 1].tasks.push(createTask);
      } else {
        data.projects.forEach(project => {
          if (project.id === projectId) {
            project.tasks.push(createTask);
            return;
          }
        });
      }
      cache.writeQuery({ query: PROJECTS, data });
    }
  });

  return [createTask, loading];
};

export const useDeleteTask = (projectId, taskId) => {
  const [deleteTask] = useMutation(DELETE_TASK, {
    optimisticResponse: {
      __typename: 'Mutation',
      deleteTask: {
        __typename: 'Task',
        id: taskId
      }
    },
    update(
      cache,
      {
        data: { deleteTask }
      }
    ) {
      const { projects } = cache.readQuery({ query: PROJECTS });
      cache.writeQuery({
        query: PROJECTS,
        data: {
          projects: projects.map(project => {
            if (project.id === projectId) {
              project.tasks = project.tasks.filter(
                task => task.id !== deleteTask.id
              );
            }
            return project;
          })
        }
      });
    }
  });

  return [deleteTask];
};

export const useCreateProject = () => {
  const [createTask] = useCreateTask();
  const [createProject, { loading }] = useMutation(CREATE_PROJECT, {
    update: (cache, { data: { createProject } }) => {
      const data = cache.readQuery({ query: PROJECTS });
      createProject.tasks = [];
      data.projects.push(createProject);
      cache.writeQuery({ query: PROJECTS, data });
    },
    onCompleted: data => {
      createTask({
        variables: {
          projectId: data.createProject.id,
          title: 'New Task',
          status: 0,
          priority: 0,
          startDate: moment(),
          endDate: moment().add(1, 'days')
        }
      });
    }
  });

  return [createProject, loading];
};

export const useDeleteProject = projectId => {
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    optimisticResponse: {
      __typename: 'Mutation',
      deleteProject: {
        __typename: 'Project',
        id: projectId
      }
    },
    update: (cache, { data: { deleteProject } }) => {
      const { projects } = cache.readQuery({ query: PROJECTS });
      cache.writeQuery({
        query: PROJECTS,
        data: {
          projects: projects.filter(project => project.id !== deleteProject.id)
        }
      });
    }
  });

  return [deleteProject];
};
