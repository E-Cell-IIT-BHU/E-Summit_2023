import React, { Component, useEffect } from "react";
import style from "./Dashboard.module.scss";
import Image from "next/image";
import ticketImage from "../../assets/E-summit_ticket.jpg"
import ticketImage2 from "../../assets/E-summit_ticket2.jpg"
import { useRouter } from "next/router";
import { UserAuth } from "../../context/AuthContext";
import { Card, Col, Text, Row } from "@nextui-org/react";

export const TicketCardHorizontal = ({ details }) => {
  return (
    <Card Card css={{ bg: "$black", w: "100%", h: "100%" }} className={style.horizontalTicket}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5, h: "100%" }}>
        <Col style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          <Row>
            <Col>
              <Text size={40} weight="bold" transform="uppercase" color="#FFFBEB" className={style.rotated} style={{ fontFamily: "monospace" }}>
                {`E-Summit'23 IIT BHU`}
              </Text>
            </Col>
            <Col>
              <Text size={30} weight="bold" transform="uppercase" color="#FFFBEB" style={{ textAlign: "right", fontFamily: "monospace" }}>
                {details.allTicketName}
              </Text>
              <Text size={30} weight="bold" transform="uppercase" color="#FFFBEB" style={{ textAlign: "right", fontFamily: "monospace" }}>
                {details.currency + " " + details.totalTicketAmount}
              </Text>
            </Col>
          </Row>
          <Row style={{ float: "bottom" }}>
            <Col>
              <Text size={35} weight="bold" transform="uppercase" color="#FFFBEB" style={{ fontFamily: "monospace" }}>
                {details.userName}
              </Text>
            </Col>
            <Col>
              <Text size={18} style={{ textAlign: "right", fontFamily: "monospace" }} weight="bold" transform="uppercase" color="#FFFBEB">
                Order ID: {details.uniqueOrderId}
              </Text>
            </Col>
          </Row>
        </Col>
      </Card.Header>
      <Image
        src={ticketImage}
        width="1829"
        height="555"
        objectFit="cover"
        alt="Card image background"
        style={{ filter: "brightness(70%)" }}
      />
    </Card >
  );
}

export const TicketCardVertical = ({ details }) => {
  return (
    <Card Card css={{ bg: "$black", w: "320px", h: "100%" }} className={style.verticalTicket}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5, h: "100%" }}>
        <Col style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          <Row>
            <Col>
              <Text size={20} weight="bold" transform="uppercase" color="#FFFBEB" className={style.rotated} style={{ fontFamily: "monospace" }}>
                {`E-Summit'23 IIT BHU`}
              </Text>
            </Col>
            <Col>
              <Text size={15} weight="bold" transform="uppercase" color="#FFFBEB" style={{ textAlign: "right", fontFamily: "monospace" }}>
                {details.allTicketName}
              </Text>
              <Text size={15} weight="bold" transform="uppercase" color="#FFFBEB" style={{ textAlign: "right", fontFamily: "monospace" }}>
                {details.currency + " " + details.totalTicketAmount}
              </Text>
            </Col>
          </Row>
          <Row style={{ float: "bottom" }}>
            <Col>
              <Text size={22} weight="bold" transform="uppercase" color="#FFFBEB" style={{ fontFamily: "monospace" }}>
                {details.userName}
              </Text>
            </Col>
            <Col style={{ transform: "rotate(90deg)", position: "relative", bottom: "40px", right: "-40px" }}>
              <Text size={12} style={{ textAlign: "right", fontFamily: "monospace", width: "190px" }} weight="bold" transform="uppercase" color="#FFFBEB">
                Order ID: {details.uniqueOrderId}
              </Text>
            </Col>
          </Row>
        </Col>
      </Card.Header>
      <Image
        src={ticketImage2}
        width="953"
        height="1579"
        objectFit="cover"
        alt="Card image background"
        style={{ filter: "brightness(70%)" }}
      />
    </Card >
  );
}


const Loader = () => {
  return (
    <lottie-player
      src="https://assets4.lottiefiles.com/packages/lf20_zy7c7hn2.json"
      background="transparent"
      speed="1"
      style={{ width: "300px", height: "300px" }}
      loop
      autoplay
    ></lottie-player>
  );
};
const Dashboard = () => {
  const router = useRouter();
  const { handleGoogleSignIn, logout, user, isLoggedIn, checkRegisteration } = UserAuth();
  // console.log(user)
  checkRegisteration();
  return (
    <>
      {!user?.name ? (
        <div className="inline-flex w-full sm:mx-2">
          <button
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900"
            onClick={() => handleGoogleSignIn()}
            style={{ margin: "100px auto" }}
          >
            Login
          </button>
        </div>
      ) : (
        <div className={style.container1}>
          {/* {redirect()} */}
          <div className={`${style.row}  ${style.row1} `}>
            <div className={style.col} style={{ flexBasis: "100%" }}>
              <div className={style.imgBox}>
                <Image
                  className={style.imgBox}
                  src={user.avatar}
                  width="300"
                  height="300"
                  alt={user.name[0].toUpperCase()}
                />
              </div>
              <div>
                <h1 className={style.userName}>{user.name}</h1>
                <p style={{ fontSize: "1.5rem" }}>{user.email}</p>
              </div>

              <div className={style.row4}>
                <h1 className={style.data}>PARTICIPANT ID:</h1>
                <h1 className={style.data} style={{ color: "#c084fc" }}>
                  {user.participant_id}
                </h1>
              </div>
            </div>
          </div>
          {user.isRegistered ? <div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <h1 className={style.data} style={{ color: "#38E54D" }}>You are registered!</h1>
              {/* <h1 className={style.data} style={{ color: "#c084fc" }}>Your Ticket Details:-</h1> */}
              <TicketCardHorizontal details={user.ticketDetails} />
              <TicketCardVertical details={user.ticketDetails} />
            </div>
          </div> : <iframe src={`https://www.townscript.com/v2/widget/esummit-2023-iit-bhu-343224/booking?td-ticket-name-1=5&td-ticket-name-2=6&name=${user.name}&emailid=${user.email}&cq1=${user.participant_id}`} frameBorder="0" height="600px" width="100%"></iframe>}
        </div>
      )}
      <script
        async
        src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
      />
    </>
  );
};

export default Dashboard;
