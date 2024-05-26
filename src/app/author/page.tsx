import AuthorInfo from "@/components/organism/authorInfo/AuthorInfo";

export const metadata = {
  title: "Author Page | MetaBlog",
  description: "Generated by create next app",
};
const Author = () => {
  return (
    <main>
      <section>
        <AuthorInfo />
      </section>
    </main>
  );
};

export default Author;
