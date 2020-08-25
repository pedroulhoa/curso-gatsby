import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"

import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, description, position },
    },
  } = useStaticQuery(
    graphql`
      query MySiteMetaData {
        site {
          siteMetadata {
            title
            description
            position
          }
        }
      }
    `
  )

  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/">
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
