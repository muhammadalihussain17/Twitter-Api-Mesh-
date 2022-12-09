import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';
import Service from '../../Service'
import ReactPaginate from 'react-paginate';

import './Home.css';

function Home() {

    const [input,setInput] = useState("");
    const [{}, dispatch] = useStateValue("");
    const [{ term }] = useStateValue()
    const {dataa} = Service(term);

    const search = (e) => {
      e.preventDefault();
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input
      })
    }



    const [myStyle,setMyStyle] = useState({
        color: 'White',
        backgroundColor: '#1A1616'
      })
    
      const toggle = () => {
        if(myStyle. backgroundColor == '#1A1616'){
          setMyStyle({
            color: '#1A1616',
            backgroundColor: 'White',
          })
        }
        else{
          setMyStyle({
            color: 'White',
            backgroundColor: '#1A1616'
          })
        }
      }
    

      
     const [pageNumber,setPageNumber] = useState(0);
           
        
       
  
      const userPerPage = 2;
      const userVisited = pageNumber * userPerPage;
      const pageCount = Math.ceil(dataa?.data.length / userPerPage);
    
      const changePage = ({selected}) => {
      setPageNumber(selected); 
    }
  
   
  
     const displayUser = dataa?.data
     .slice(userVisited, userVisited + userPerPage)
     .map(item => (
              <div className='account__tweets'>
            <div className='tweet'>
                    <div className='tweet__img'>
                    <img src='https://www.datafeedwatch.com/hubfs/alexander-shatov-k1xf2D7jWUs-unsplash%20%281%29.jpg'/>
                    </div>
                    <div className='tweet__info'>
                     { dataa?.includes.users
                       .map(item => ( 
                        <>
                       <h5> {item.name}</h5>
                       <h6>@{item.username}</h6>
                       </>
                       )) }
                    </div>
                </div>
                <div className='tweet_text'>
                    <h5>{item.text}</h5>
                </div>
                <div className='tweet_likes'>
                    <h5><i className='fa fa-heart icon'/>{item?.public_metrics?.like_count}</h5>
                    <h5><i className="fa fa-comment icon1"></i>{item?.public_metrics?.reply_count}</h5>
                    <h5><i className="fa-solid fa-retweet icon1"></i>{item?.public_metrics?.retweet_count}</h5>
                </div>
                </div>
      ))  
     
    



   
  return (
    <div className='home' style={myStyle}>
      <div className='container home__container '>
       <div className='top__account'>
        <div className='top__account__heading'>
            <h3 className=''>@Accounts</h3>
        </div>
        <div className='top__account__ids'>
            <h4>@T_witterTop</h4>
        </div>
        <div className='top__account__ids'>
            <h4>@pablorodas</h4>
        </div>  
        <div className='top__account__ids'>
            <h4>@sejournal</h4>
        </div>  
        <div className='top__account__ids'>
            <h4>@shyTopAshe</h4>
        </div> 
         <div className='top__account__ids'>
            <h4>@TAB_Boards</h4>
        </div>
        <div className='top__account__ids'>
            <h4>@Bright_Tax</h4>
        </div>
        <div className='top__account__ids'>
            <h4>@CeFiRates</h4>
        </div>
        <div className='top__account__ids'>
            <h4>@MiLBPromos</h4>
        </div>
  
       </div>
       <div className='top_account_post'>
          <div className='top_account_search'>
            <form spellCheck = "false">
            <input className='form-control search' type='text' placeholder='type here!' value={input} onChange={e=>setInput(e.target.value)}/>
            <button type='submit' className='hide'  onClick={search}>search</button>
            </form>
          </div>

        <div className='user__account__tweets'>{displayUser}</div>
      { dataa? ( <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />) : (
        <></>
      ) }
     
       </div>
          
       <div className='top__trends'>
        <div className='top__trends_heading'>
            <h3>#Trends</h3>
        </div>
        <div className='top__trends_ids'>
            <h4>#FATF</h4>
        </div>
        <div className='top__trends_ids'>
            <h4>#ShanMasd</h4>
        </div>
        <div className='top__trends_ids'>
            <h4>#imranKhan</h4>
        </div>
        <div className='top__trends_ids'>
            <h4>#Chor</h4>
        </div>
        <div className='top__trends_ids'>
            <h4>#HighCourt</h4>
        </div>
        <div className='top__trends_ids'>
            <h4>#GeoNews</h4>
        </div>
        <div className='top__trends_ids'>
            <h4>#WCT2022</h4>
        </div>
        <div className='top__trends_ids'>
            <h4>#MaulaJutt</h4>
        </div>
       </div>
       <div className='header__nav__toogle'>
            <div className="form-check form-switch switch">
            <input className="form-check-input  form-switch1" onClick={toggle} type="checkbox" id="flexSwitchCheckDefault"/>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Home
