export default function ModelForm({isOpen, onClose, mode, OnSubmit}) {
    return(
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <h3 className="font-bold text-lg py-4">{mode==='edit'? 'Edit Client' : 'Client Details'}</h3>
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <button className="btn btn-success">{mode==='edit'? 'Save Chnages' : 'Add Client'}</button>
                </form>
            </div>
            </dialog>
        </>
    );
}