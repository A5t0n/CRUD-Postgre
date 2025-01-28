export default function ModelForm({isOpen, onClose, mode, OnSubmit}) {
    return(
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <h3 className="font-bold text-lg py-4">{mode==='edit'? 'Edit Client' : 'Client Details'}</h3>
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}

                <label className="input input-bordered my-4 flex items-center gap-2">
                Name
                    <input type="text" className="grow" />
                </label>
                <label className="input input-bordered my-4 flex items-center gap-2">
                Email
                    <input type="text" className="grow" />
                </label>
                <label className="input input-bordered my-4 flex items-center gap-2">
                Job
                    <input type="text" className="grow" />
                </label>

                <div className="flex mb-4 justify-between my-4">
                    <label className="input input-bordered mr-4 flex items-center gap-2">
                    Rate
                        <input type="number" className="grow" />
                    </label> 

                    <select className="select select-bordered mt-4 w-full max-w-xs">
                        <option>Inactive</option>
                        <option>Active</option>
                    </select> 
                </div>

                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <button className="btn btn-success">{mode==='edit'? 'Save Chnages' : 'Add Client'}</button>
                </form>
            </div>
            </dialog>
        </>
    );
}