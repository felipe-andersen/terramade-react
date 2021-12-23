import * as React from 'react';
import { UserList } from "../../../storagesInterfaces/users";
import { usePostList  } from '../../../globalContext/post';
import { themes } from '../../../globalContext/theme';
import { PostComponent, PostProps } from "../post";
import styled from "styled-components";
import { MainComponentStyled } from "./styles";
import * as Router from "react-router-dom";

const myList = [1,2,3];

// Components que não podem ter seu estado alterado, precisam tomar cuidado com renderização dinamica

export function MainComponent():JSX.Element {
  const { postList, setPost } = usePostList();
 
  return (
    <MainComponentStyled>
     

   
     
     

      <div className="highlightedShorts">
        <button className='previusBtn'></button>
        {
          myList.map( i => {
            return (
              <div className="short--container">
                <div className="short">
                  <img className="videoCover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"/>
                  <Router.Link to="/nome-do-post" className="mask" >
                   
                  </Router.Link>      
                  <div className="picNameProfession-container">
                    <div className="nameProfession--container">
                      {/*<div  className="textContent name">Hoje tem live a noite no youtube. link aqui. aparece lá.</div>*/}
                    </div>
                  </div>
                </div>
                <div className="storiePic--container">
                  <a className="storiePic container" href="">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"/>
                  </a>
                </div>
                <div title={"Daniel Sharezaed - Design de Interioes"} className="shortContentText">
                  <a href='' className='publicNameOcupation'>Daniel Sharezaed - Design de Interioes</a>
                </div>
              </div>
            )
          })
        }
        <button className='nextBtn'></button>
      </div>

   
      <div className="gridFeed">
      {
        postList.map( post => {
          return (
            <PostComponent 
              postImageAlt={post.postImageAlt}
              postImageURL={ post.postImageURL }
              reactionsAcount={ post.reactionsAcount }
              title={ post.title }
              content={ post.content}
              key={ post.key }
              hasEdited={ post.hasEdited }
              userName={ "João Neto"}
              profileImageID={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"}
              followersAcount={5}
              state={"SP"}
              city={"São Paulo"}
            />
          )
        })
      }
      </div>
      </MainComponentStyled>
    )
  }
;






