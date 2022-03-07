import React from "react";
import { map } from "lodash";
import dataCourses from "./data";
import "./Courses.scss";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const Courses = () => {
  const { allImageSharp } = useStaticQuery(
    graphql`
      {
        allImageSharp {
          nodes {
            gatsbyImageData
            id
            fluid {
              originalName
            }
          }
        }
      }
    `
  );

   const getImageCustom = (name)=>{
    const image = allImageSharp.nodes.find(image=>{
      return image.fluid.originalName.includes(name);
    })
    if(!image) return;
    return getImage(image.gatsbyImageData);
   }
  return (
    <div className="courses">
      {map(dataCourses, (course, index) => (
        <a
          key={index}
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="courses__item"
        >
          <GatsbyImage image={getImageCustom(course.imageName)} alt={course.title}/>
        </a>
      ))}
    </div>
  );
};

export default Courses;
