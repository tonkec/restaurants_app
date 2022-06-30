interface Props {
    children: React.ReactNode;
}

const Container = ({ children }: Props) => (
    <main className="max-w-lg mx-auto px-4">{children}</main>
);

export default Container;
