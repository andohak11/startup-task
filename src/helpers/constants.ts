export type TaskDataTYpe = {
  title: string;
  id: number;
};

export type StepDataType = {
  title: string;
  id: number;
  tasks: TaskDataTYpe[];
};

export const STEPS_DATA: StepDataType[] = [
  {
    title: 'Foundation',
    id: 1,
    tasks: [
      { title: 'Setup virtual office', id: 1 },
      { title: 'Set mission & vision', id: 2 },
      { title: 'Select business name', id: 3 },
      { title: 'Buy domains', id: 4 }
    ]
  },
  {
    title: 'Discovery',
    id: 2,
    tasks: [
      {
        title: 'Create roadmap',
        id: 1
      },
      {
        title: 'Competitor analysis',
        id: 2
      }
    ]
  },
  {
    title: 'Delivery',
    id: 3,
    tasks: [
      {
        title: 'Release marketing website',
        id: 1
      },
      {
        title: 'Release MVP',
        id: 2
      }
    ]
  }
];
