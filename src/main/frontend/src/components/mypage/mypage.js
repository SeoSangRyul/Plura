import React, { useState, useEffect } from 'react';
import Sidebar from "../sidebar/sidebar.js";
import Footer from '../footer/footer.js';
import './mypage.css'
import music_1 from '../../img/music_1.svg'
import music_2 from '../../img/music_2.svg'
import heart from '../../img/mypage_heart.svg'
import CD from '../../img/CD.svg'
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
function MyPage(){
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
            <div className="chart">
                <div className="MYPAGE">MY PAGE</div>
                <div className="line"></div>
                <div className="RecentMusic">?????? ?????? ??????</div>
                <div className="MypageList">
                {
                        users.map((a,i)=>{
                                console.log("data num : "+i);
                                console.log("data : "+a);
                                console.log("data SONG_TILE : "+a.SONG_TILE);
                                return(
                                    Recent(a)
                                )
                            })
                    }
                                
                </div>
                <div className="HeartMusic">?????? ??????</div>
                <div className="MypageList">
                {
                        users.map((a,i)=>{
                                console.log("data num : "+i);
                                console.log("data : "+a);
                                console.log("data SONG_TILE : "+a.SONG_TILE);
                                return(
                                    Heart(a)
                                )
                            })
                    }
                </div>
                <div className="PlaylistMusic">?????? PlayList</div>
                <div className="MypageList">
                {
                        users.map((a,i)=>{
                                console.log("data num : "+i);
                                console.log("data : "+a);
                                console.log("data SONG_TILE : "+a.SONG_TILE);
                                return(
                                    Playlist(a)
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
function Recent(props){
    console.log("props : "+props);
    console.log("props : "+props.SONG_TILE);
    return(
        <>
        <div className="Mypage_component">
            <img src={music_1}></img>
            <div className="Mypage_musicdetail">
                <div className="ArtistandTitle">
                    <div className="Mypage_artist">IU</div>
                    <div className="Mypage_musicTitle">?????????</div>
                </div>
                <img src={heart}></img>
            </div>
        </div>
        </>
    )
}
function Heart(props){
    console.log("props : "+props);
    console.log("props : "+props.SONG_TILE);
    return(
        <>
        <div className="Playlist">
                        <div className="CDandMusic">
                            <img src={music_2} className="PlayListMusic"></img>
                            <img src={CD} className="cd"></img>
                        </div>
                        <div className="Playlist_Music">
                            <div className="Mypage_musicTitle">2022 ?????? ????????? ??????</div>
                            <div className="Mypage_artist">??? 33??? ????????? 501???</div>
                        </div>
                    </div>
        </>
    )
}
function Playlist(props){
    console.log("props : "+props);
    console.log("props : "+props.SONG_TILE);
    return(
        <>
        <div className="Playlist">
            <div className="CDandMusic">
                <img src={music_2} className="PlayListMusic"></img>
                <img src={CD} className="cd"></img>
            </div>
            <div className="Playlist_Music">
                <div className="Mypage_musicTitle">2022 ?????? ????????? ??????</div>
                <div className="Mypage_artist">??? 33??? ????????? 501???</div>
            </div>
        </div>
        </>
    )
}
export default MyPage