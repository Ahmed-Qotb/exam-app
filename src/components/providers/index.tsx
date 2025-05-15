import NextAuthProvider from "./_components/next-auth.provider";
import ReactQueryProvider from "./_components/react-query.provider";

type ProvidersProbs = {
  children: React.ReactNode;
};

function Providers({ children }: ProvidersProbs) {
  return (
    <ReactQueryProvider>
      <NextAuthProvider>{children}</NextAuthProvider>
    </ReactQueryProvider>
  );
}

export default Providers;
