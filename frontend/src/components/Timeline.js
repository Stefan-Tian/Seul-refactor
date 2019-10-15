import React, { useRef, useEffect } from 'react';
import { gantt } from 'dhtmlx-gantt';
import { teal, grey, red, lightBlue, amber } from '@material-ui/core/colors';
import styled from 'styled-components';
import moment from 'moment';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

const TimelineContainer = styled.div`
  && {
    .gantt_task_row {
      border: 0 !important;
    }
    .gantt_data_area {
      .gantt_task_bg {
      }
    }

    .gantt_task_content {
      border: 0;
    }
    .gantt_task_line {
      border-radius: 8px;
      border: 0;

      .gantt_task_content {
        font-weight: 800;
      }
      .gantt_task_progress_drag {
        display: none;
      }
      .gantt_link_point {
        display: none;
      }
    }
    .gantt_container {
      border: 0;
    }
    .gantt_task {
      background-color: ${grey[100]};
    }
    .gantt_task_row {
      background-color: ${grey[100]};
    }
    .gantt_task_scale {
      background-color: ${grey[100]};
    }
  }
`;

const Timeline = ({ projects }) => {
  const tasks = projects.reduce(
    (accumulator, current) => accumulator.concat(current.tasks),
    []
  );
  const data = { data: [] };
  tasks.forEach(task => {
    const start = moment(task.startDate).clone();
    const end = moment(task.endDate).clone();
    const start_date = moment(task.startDate)
      .clone()
      .format('DD-MM-YYYY');
    let color;
    let textColor;
    switch (task.priority) {
      case 0:
        color = amber[200];
        textColor = amber[600];
        break;
      case 1:
        color = lightBlue[200];
        textColor = lightBlue[300];
        break;
      case 2:
        color = red[200];
        textColor = red[300];
        break;
      default:
        color = teal[200];
        textColor = teal[400];
        return;
    }

    const item = {
      id: task.id,
      text: task.title,
      start_date,
      duration: end.diff(start, 'days'),
      progress: 0,
      color,
      textColor
    };

    data.data.push(item);
  });

  let ganttContainer = useRef(null);
  useEffect(() => {
    gantt.config.date_format = '%d-%m-%Y';
    gantt.config.show_task_cells = false;
    gantt.config.show_grid = false;
    gantt.init(ganttContainer.current);
    gantt.clearAll();
    gantt.parse(data);
  }, [data]);

  return (
    <TimelineContainer
      ref={ganttContainer}
      style={{ width: '100%', height: '300px', overflow: 'scroll' }}
    ></TimelineContainer>
  );
};

export default Timeline;
