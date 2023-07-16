import Card from '../components/Card';
import Comments from '../components/Comments';
import Layout from '../components/Layout';
import ProgressBar from '../components/ProgressBar';
import useAuth from '../hooks/useAuth';

const DashBoard = () => {
  const { user } = useAuth();
  const targetData = user?.target as {
    targetAmount: number;
    actualAmount: number;
    pendingAmount: number;
  };
  return (
    <Layout>
      <div className=" space-y-5">
        <div className="grid md:grid-cols-2 gap-y-5 gap-x-8">
          <Card>
            <div className="bg-pattern bg-cover bg-no-repeat h-full flex flex-col justify-center items-center">
              <h1 className=" font-Merienda font-bold text-4xl uppercase">
                Hello {user?.fullName.split(' ')[0]}!
              </h1>
              <p className="text-xl">It's good to see you again</p>
            </div>
          </Card>
          <Card>
            <div className="h-full">
              <h2 className="text-xl font-semibold font-barlow-condensed uppercase tracking-wide">
                My Target
              </h2>
              <div>
                <ProgressBar {...targetData} />
              </div>
            </div>
          </Card>
        </div>
        <Card>
          <Comments />
        </Card>
      </div>
    </Layout>
  );
};

export default DashBoard;
