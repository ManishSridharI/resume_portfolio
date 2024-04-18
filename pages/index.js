import ContainerBlock from "../components/ContainerBlock";
import RecentProjects from "../components/RecentProjects";
import Main from "../components/Main";
import getLatestRepos from "@lib/getLatestRepos";
import myData from "@constants/mydata";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Manish Sridhar Immadi - Blog"
      description="This is a profile blog built specifically for my portfolio."
    >
      <Main />
      <RecentProjects repositories={repositories}/>
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  const token = process.env.GITHUB_AUTH_TOKEN;
  const repositories = await getLatestRepos(myData, token);

  if (!repositories || repositories.length === 0) {
    return { props: { repositories: [] } }; // Ensure we always return an array
  }
  return {
    props: {
      repositories,
    },
  };
};

