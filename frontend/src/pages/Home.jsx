import { useEffect, useState } from "react";
import { MdAdd, MdEdit, MdDelete } from "react-icons/md";
import API from "../../services/api";

export default function Home() {

    // store current value
    const [text, setText] = useState("");
    // store all the items already present
    const [items, setItems] = useState([]);
    // store the track of which item is select for edit
    const [editIndex, setEditIndex] = useState(null);

    // console.log("1." + !text.trim());
    // console.log("3." + text.trim());
    // console.log("2." + text.trim().length);

    useEffect(() => {
        fetchItem();
    }, [])

    const fetchItem = async () => {
        const res = await API.get("/items")
        setItems(res.data);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("1. " + text);

        // checks if in input nothing then return function
        if (!text.trim) { return; }

        // checks if item in update mode or not.
        if (editIndex) {
            await API.put(`/items/${editIndex}`, {text})
            setEditIndex(null);
        } else {
            await API.get("/items", {text})
        }

        setText("")
        fetchItem();
    }

    const handleEdit = (items) => {
        setText(items.text);
        setEditIndex(items._id);
    }

    const handledelet = async (id) => {
        await API.delet(`/items/${id}`);
        fetchItem();
    }

    return (
        <>
            <div>
                <h1 className="flex items-center justify-center my-10 text-4xl text-blue-500">CRUD APP</h1>

                <form onSubmit={handleSubmit} className="flex items-center justify-center">
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} className={`border-2 rounded-md outline-3 px-100 py-2 mr-5 transition ${editIndex !== null ? "border-sky-500 outline-sky-500" : "border-blue-500 outline-blue-500"} `} />
                    <button type="submit" className={`border-2 font-medium rounded-md px-2 py-2 text-2xl outline-3 transition ${editIndex !== null ? "border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white outline-sky-500" : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white outline-blue-500"}`}>{editIndex !== null ? <MdEdit /> : <MdAdd />}</button>
                </form>

                <div className="flex flex-col items-center justify-center my-10 ">
                    {items.map((item) => {
                        <div key={items._id} className="flex items-center justify-between space-x-4 p-2 px-100 w-full">
                            <p className="flex-1 basis-[96%]">{item}</p>
                            <button onClick={() => handleEdit(item)} className="text-4xl p-4 hover:border border-sky-500 hover:outline-2 outline-sky-500 hover:rounded-md flex-none basis-[2%]"><MdEdit className="fill-sky-500" /></button>
                            <button onClick={() => handledelet(item._id)} className="text-4xl p-4 hover:border border-red-500 hover:outline-2 outline-red-500 hover:rounded-md flex-none basis-[2%]"><MdDelete className="fill-red-500" /></button>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}