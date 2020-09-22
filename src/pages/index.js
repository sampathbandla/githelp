import React from "react";
import { MdDone, MdClose } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

function Index() {
	return (
		<div className="index">
			<div className="recentQuestions">
				<p>
					Recent Questions?<span className="link">View All</span>
				</p>
				<button className="ask">Ask New Question?</button>
				<div className="questions">
					<div className="question">
						<div className="left">
							<img
								src="https://camo.githubusercontent.com/c66bcc90d82c71c5f8b8349726955daaaffcb796/68747470733a2f2f6c6f676368696d702e636f6465636172726f742e6e65742f696d616765732f6c6f676368696d702d6c6f676f5f636972636c652e706e67"
								alt=""
							/>
							<AiFillGithub />
						</div>
						<div className="center">
							<p className="questionText">
								What is the use of useEffect in app.js?
							</p>
							<div className="userDetails">
								<p className="by">
									By <span>Sampath Bandla</span>
								</p>
								&nbsp;-&nbsp;<p className="at"> 12-07-2020 01:32PM</p>
							</div>
						</div>
						<div className="right">
							<MdDone {...{ title: "folder" }} className="greenText" />
						</div>
					</div>
				</div>
				<div className="questions">
					<div className="question">
						<div className="left">
							<img
								src="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg"
								alt=""
							/>
							<AiFillGithub />
						</div>
						<div className="center">
							<p className="questionText">
								What is the use of useEffect in app.js?
							</p>
							<div className="userDetails">
								<p className="by">
									By <span>Sampath Bandla</span>
								</p>
								&nbsp;-&nbsp;<p className="at"> 12-07-2020 01:32PM</p>
							</div>
						</div>
						<div className="right">
							<MdClose className="redText" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Index;
