import React, { useEffect, useState } from "react";
import styles from "./ServicesSection.module.css";
import Button from "../button/Button";

const list = [
  {
    name: "Floor Plans",
    tag: "floor",
    description:
      "Our floor planning service is designed to maximize the potential of your space, ensuring both functionality and aesthetic appeal. We meticulously craft layouts that optimize the flow and usability of each area, taking into account your specific needs and preferences. Our expert team combines innovative design principles with practical solutions, creating floor plans that are both stylish and efficient. Whether it's for a new construction or a renovation project, our floor planning service guarantees a harmonious Whether it's for a new construction or a renovation project, our floor planning service guarantees a harmonious...",
    image: "/architecture_website/assets/images/services/floor.jpg",
  },
  {
    name: "Interior",
    tag: "interior",
    description:
      "Our floor planning service is designed to maximize the potential of your space, ensuring both functionality and aesthetic appeal. We meticulously craft layouts that optimize the flow and usability of each area, taking into account your specific needs and preferences. Our expert team combines innovative design principles with practical solutions, creating floor plans that are both stylish and efficient. Whether it's for a new construction or a renovation project, our floor planning service guarantees a harmonious Whether it's for a new construction or a renovation project, our floor planning service guarantees a harmonious...",
    image: "/architecture_website/assets/images/services/interior.jpg",
  },
  {
    name: "Exterior",
    tag: "exterior",
    description:
      "Our floor planning service is designed to maximize the potential of your space, ensuring both functionality and aesthetic appeal. We meticulously craft layouts that optimize the flow and usability of each area, taking into account your specific needs and preferences. Our expert team combines innovative design principles with practical solutions, creating floor plans that are both stylish and efficient. Whether it's for a new construction or a renovation project, our floor planning service guarantees a harmonious Whether it's for a new construction or a renovation project, our floor planning service guarantees a harmonious...",
    image: "/architecture_website/assets/images/services/exterior.jpg",
  },
  {
    name: "Landscape",
    tag: "landscape",
    description:
      "Our floor planning service is designed to maximize the potential of your space, ensuring both functionality and aesthetic appeal. We meticulously craft layouts that optimize the flow and usability of each area, taking into account your specific needs and preferences. Our expert team combines innovative design principles with practical solutions, creating floor plans that are both stylish and efficient. Whether it's for a new construction or a renovation project, our floor planning service guarantees a harmonious Whether it's for a new construction or a renovation project, our floor planning service guarantees a harmonious...",
    image: "/architecture_website/assets/images/services/landscape.jpg",
  },
  {
    name: "Architectural",
    tag: "architectural",
    description:
      "Our floor planning service is designed to maximize the potential of your space, ensuring both functionality and aesthetic appeal. We meticulously craft layouts that optimize the flow and usability of each area, taking into account your specific needs and preferences. Our expert team combines innovative design principles with practical solutions, creating floor plans that are both stylish and efficient. Whether it's for a new construction or a renovation project, our floor planning service guarantees a harmonious Whether it's for a new construction or a renovation project, our floor planning service guarantees a harmonious...",
    image: "/architecture_website/assets/images/services/architecture.jpg",
  },
];

function SelectionButton({ title, tag, selected, setSelected }) {
  return (
    <button
      style={
        tag == selected
          ? {
              background: "var(--clr-accent)",
              color: "var(--dark-text-800)",
              fontWeight: 700,
            }
          : {
              background: "var(--clr-secondary)",
            }
      }
      className={styles.selectionBtn}
      onClick={() => {
        setSelected(tag);
      }}
    >
      {title}
    </button>
  );
}

export default function ServicesSection() {
  const [selected, setSelected] = useState("floor");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const selectedItem = list.filter((item) => item.tag == selected)[0];
    setDescription(selectedItem.description);
    setLoading(true);
    const img = new Image();
    img.src = selectedItem.image;
    img.onload = () => {
      setImage(selectedItem.image);
      setLoading(false);
    };
  }, [selected]);

  return (
    <div className={styles.grid}>
      <div className={styles.textSection}>
        <h2>Services</h2>
        <p>
          Our comprehensive range of services caters to all your needs, from
          architectural design and planning to cutting-edge web development. We
          combine technical expertise with creative vision to deliver solutions
          that exceed expectations.
        </p>
      </div>
      <div className={styles.btnGroup}>
        {list.map((item) => (
          <SelectionButton
            title={item.name}
            tag={item.tag}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
      {loading ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        <>
          <div className={styles.contentSection}>
            <img src={image} alt="product image" />
            <p>{description}</p>
          </div>
          <Button text={"Read More"} style={styles.readMoreBtn} />
        </>
      )}
    </div>
  );
}
