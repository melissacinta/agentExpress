import Layout from '../components/Layout';
import ProgressBar from '../components/ProgressBar';

const DashBoard = () => {
  const targetData = {
    targetAmount: 200000,
    actualAmount: 91804.84,
    pendingAmount: 102272.62,
  };
  return (
    <Layout>
      <div>
        <div>
          <h1>Hello Carrie!</h1>
          <p>It's good to see you again</p>
        </div>
        <div>
          <h2>My Target</h2>
          <div>
            <ProgressBar {...targetData} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashBoard;
