import { CustomLoader, LoaderContainer } from './Loader.styled';

export const Loader = () => (
  <>
    <p>Loading contacts, please wait...</p>
    <LoaderContainer>
      <CustomLoader
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="48"
      />
    </LoaderContainer>
  </>
);
