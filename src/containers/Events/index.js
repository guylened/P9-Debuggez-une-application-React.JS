import { useState } from "react";
import EventCard from "../../components/EventCard";
import Select from "../../components/Select";
import { useData } from "../../contexts/DataContext";
import Modal from "../Modal";
import ModalEvent from "../ModalEvent";

import "./style.scss";

const PER_PAGE = 9;

const EventList = () => {
  const { data, error } = useData();
  const [type, setType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const filteredEvents =
    (type
      ? data?.events.filter((event) => event.type === type)
      : data?.events) || [];
  const paginatedEvents = filteredEvents.filter((_, index) => {
    const startIndex = (currentPage - 1) * PER_PAGE;
    const endIndex = startIndex + PER_PAGE;
    return index >= startIndex && index < endIndex;
  });

  const changeType = (evtType) => {
    setType(evtType);
    setCurrentPage(1);
  };
  const pageNumber = Math.ceil(filteredEvents.length / PER_PAGE);
  const typeList = new Set(data?.events.map((event) => event.type));
  return (
    <>
      {error && <div>An error occured</div>}
      {data === null ? (
        "loading"
      ) : (
        <>
          <h3 className="SelectTitle">Catégories</h3>
          <Select
            selection={Array.from(typeList)}
            onChange={(value) => (value ? changeType(value) : changeType(null))}
          />
          <div id="events" className="ListContainer">
            {paginatedEvents.map((event) => (
              <Modal key={event.id} Content={<ModalEvent event={event} />}>
                {({ setIsOpened }) => (
                  <EventCard
                    onClick={() => setIsOpened(true)}
                    imageSrc={event.cover}
                    title={event.title}
                    date={new Date(event.date)}
                    label={event.type}
                  />
                )}
              </Modal>
            ))}
          </div>
          <div className="Pagination">
            {Array.from({ length: pageNumber }).map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <a
                key={`page-${index + 1}`}
                href="#events"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(index + 1);
                }}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default EventList;
