import { Layout, PageTitle, Step } from 'components';
import { STEPS_DATA } from 'helpers/constants';

function App() {
  return (
    <Layout>
      <PageTitle>My startup progress</PageTitle>
      {STEPS_DATA.map((step, i) => (
        <Step
          key={`step-${step.id}`}
          id={step.id}
          title={step.title}
          num={i + 1}
          tasks={step.tasks}
        />
      ))}
    </Layout>
  );
}

export default App;
