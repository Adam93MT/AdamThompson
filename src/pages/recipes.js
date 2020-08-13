import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby";
import './recipes.scss'
import { startCase } from "lodash";
import Header from "../components/Header";
import DefaultPage from '../templates/default-page/default-template'

const RecipesPage = () => {

  const recipes = useStaticQuery(graphql`
  query {
    allMdx(filter: {frontmatter: {section: {eq: "recipes"}}}) {
      nodes {
        frontmatter {
          title
          tags
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
  `).allMdx.nodes

  return (
    <DefaultPage>
      <h1>Recipes</h1>

      <p>
        This is my collection of recipes. Most of these recipes I've modified from existing recipes enough that I needed to write it down somewhere.
        {/* (food recipes, not code "recipes". For that see <a href="/snippets">snippets</a>). */}
      </p>

      <p>
        The format of the recipes is in the style of Cooking for Engineers—a flowchart that describes when to use and combine each ingredient. 
        I find this is the most intuitive way to read a recipe (personally).
      </p>

      <div className="recipe-cards">
        {
          recipes.map(recipe => {
          return (
            <Link to={'.'+recipe.fields.slug} className={`recipe-card`}>
              <h1 className="recipe-title">{recipe.frontmatter.title}</h1>
              <div className="recipe-tags">
                {
                  recipe.frontmatter.tags.split(',').map(tag => <span className="recipe-tag">{startCase(tag)}</span>)
                }
              </div>
            </Link>
          )})
        }
      </div>
    </DefaultPage>
  )
}

export default RecipesPage