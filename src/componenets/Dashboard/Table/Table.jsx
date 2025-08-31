import { useState } from "react";
import PriorityBadge from "./cell/PriorityBadge";
import StatusBadge from "./cell/StatusBadge";
import Action from "./cell/Action";
import { tasks } from "../../../Data/Data";
import TaskModal from "./TableModal/TableModal";

export default function Table() {
  const [selected, setSelected] = useState({}); // id -> boolean
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const allSelected = tasks.length > 0 && tasks.every((t) => selected[t.id]);
  const toggleAll = () => {
    const next = {};
    if (!allSelected) tasks.forEach((t) => (next[t.id] = true));
    setSelected(next);
  };
  const toggleOne = (id) => setSelected((s) => ({ ...s, [id]: !s[id] }));

  function handleOpenTableModal(data) {
    setOpenModal(true);
    setModalData(data);
  }

  console.log("openModal", openModal);

  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            <th style={{ width: 36 }}>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={toggleAll}
                aria-label="Select all"
              />
            </th>
            <th>Customer Name</th>
            <th>Customer Code</th>
            <th>Task ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
            {/* <th>Type</th> */}
            <th>Description</th>
            <th>View</th>
            <th style={{ width: 40 }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.id} className={selected[t.id] ? "row-selected" : ""}>
              <td>
                <input
                  type="checkbox"
                  checked={!!selected[t.id]}
                  onChange={() => toggleOne(t.id)}
                  aria-label={`Select ${t.id}`}
                />
              </td>
              <td>{t.customerName}</td>
              <td>{t.customerCode}</td>
              <td>{t.id}</td>
              <td className="title-cell">{t.title}</td>
              <td>
                <StatusBadge value={t.status} />
              </td>
              <td>
                <PriorityBadge value={t.priority} />
              </td>
              {/* <td>{t.type}</td> */}
              <td className="muted">{t.description}</td>
              <td>
                <button
                  onClick={() => handleOpenTableModal(t)}
                  className="icon-btn"
                >
                  ↗️
                </button>
              </td>
              <td>
                <Action />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openModal && (
        <TaskModal
          openModal={openModal}
          onClose={() => setOpenModal(false)}
          modalData={modalData}
        />
      )}
    </div>
  );
}
