interface Props {
    children: React.ReactNode;
}

const Container = ({ children }: Props) => (
    <main className="max-w-lg mx-auto py-12">{children}</main>
);

export default Container;
