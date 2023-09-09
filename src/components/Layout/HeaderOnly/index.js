import Header from "~/components/Layout/components/Header";

function DefultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefultLayout;