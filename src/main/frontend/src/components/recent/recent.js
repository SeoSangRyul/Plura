import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/sidebar.js";
import Footer from '../footer/footer.js';
import './recent.css'
import recentimg from'../../img/recent_music.svg'
import playbtn from '../../img/playbtn_detail.svg'
import editbtn from '../../img/editbtn.svg'
import playlist from '../../img/play_list.svg'
import mylist from '../../img/my_list.svg'
import details from '../../img/details.svg'
import music_1 from '../../img/music_1.svg'
import playbtn_black from '../../img/play_btn_black.svg'
import axios from "axios";
const UserList = ({ users }) => {
    return (
        <div>
            {users.map(user => {
                return (<div key={user.id}>
                    {user.name}
                </div>)
            })}
        </div>
    );
};


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.post( '/songList',
            {
                MEM_ID: 'test'
            },
            {
                headers:{
                    contentType: 'application/json'
                }
            }
        )
            .then(response => {
                setUsers(response.data.sondList);
            });
    }, []);

    return (
        <>
            <h1>Users</h1>
            <UserList users={users}/>
        </>
    );
}
function Recent(){
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.post( '/songList',
            {
                MEM_ID: 'test'
            },
            {
                headers:{
                    contentType: 'application/json'
                }
            }
        )
            .then(response => {
                setUsers(response.data.sondList);
            });
    }, []);


    function initData() {
        axios.post( '/songList',
            {
                MEM_ID: 'test'
            },
            {
                headers:{
                    contentType: 'application/json'
                }
            }
        )
            .then((response) => {
                if(response.data.sondList != null){
                }
                else {

                }
            })
            .catch((response) => { console.log('Error!') });
    }
    //initData();
    Users();
    return(
        <>
        <div className="back">
            <Sidebar></Sidebar>
            <div className="recent">
                <div className="recentbox">
                    <img src={recentimg}></img>
                    <div className="textbox">
                        <div className="recent_text">
                            <div className="recenttitle">?????? ?????? ??????</div>
                            <div className="listex">
                                <div>ye._.xim</div>
                                <div>??? 16???</div>
                            </div>
                            <div className="ex">?????? ?????? ????????? ?????? playlist?????????.</div>
                        </div>
                        <div className="recent_btn">
                            <img src={playbtn} onClick={()=>{alert('?????????????????? ???????????????')}}></img>
                            <img src={editbtn} onClick={()=>{alert('?????????????????? ???????????????')}}></img>
                        </div>
                    </div>
                </div>
                <div className="Musics">
                {
                        users.map((a,i)=>{
                                console.log("data num : "+i);
                                console.log("data : "+a);
                                console.log("data SONG_TILE : "+a.SONG_TILE);
                                return(
                                    MusicList(a)
                                )
                            })
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    </>
    )
}
function MusicList(props){
    console.log("props : "+props);
    console.log("props : "+props.SONG_TILE);
    return(
        <>
        <div className="musicdetail">
            <div className="musicleft">
                <div className="music">
                    <img src={music_1} className="musicimg"></img>
                    <div className="musicinfo">
                        <div className="musictitle">{props.SONG_TILE}</div>
                        <div className="musicartist">{props.SONG_SGER}</div>
                    </div>
                </div>
            </div>
            <div className="musicright">
                <img src={playbtn_black} onClick={()=>{alert('?????? ???????????? ???????????????')}}></img>
                <img src={playlist} onClick={()=>{alert('???????????? ???????????? ???????????????')}}></img>
                <img src={mylist} onClick={()=>{alert('?????? ??? ???????????? ?????????????????? ??? ??????????')}}></img>
                <img src={details} onClick={()=>{alert('???????????? ???????????? ???????????????.')}}></img>
            </div>
        </div>
        </>
    )
}
export default Recent