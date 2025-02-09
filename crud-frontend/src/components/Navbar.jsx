export default function NavBar({onOpen, onSearch}) {

    const handleSearchChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div className="navbar bg-base-100 p-4">
            <div className="navbar-start">
            <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center">
            <div className="flex-none gap-2">
                <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" onChange={handleSearchChange}/>
                </div>
            </div>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary" onClick={onOpen}>Add Client</a>
            </div>
        </div>
    );
}
