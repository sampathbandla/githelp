import React from "react";
import { MdDone, MdClose } from "react-icons/md";
import {
	AiFillGithub,
	AiOutlineAppstoreAdd,
	AiOutlinePlusCircle,
	AiOutlineQuestion
} from "react-icons/ai";
import { VscBug } from "react-icons/vsc";

function Index(props) {
	var getIcon = type => {
		switch (type) {
			case "question":
				return <AiOutlineQuestion />;
			case "bug":
				return <VscBug />;
			case "feature":
				return <AiOutlineAppstoreAdd />;
		}
	};
	var getIconStyle = type => {
		switch (type) {
			case "question":
				return "questiontag";
			case "bug":
				return "bugtag";
			case "feature":
				return "featuretag";
		}
	};
	return (
		<div className="index">
			<div className="recentQuestions">
				<p>Recent Helps?</p>
				<button className="ask">
					<AiOutlinePlusCircle />
				</button>
				<div className="questions">
					<div className="filter">
						<span>Filter</span>
						<p className="filter___question questiontag">Question</p>
						<p className="filter___bug bugtag">Bug</p>
						<p className="filter___feature futuretag">Feature</p>
					</div>
					{props.helps.map((help, index) => (
						<div key="" className="question">
							<div className="left">
								<img src={help.userIcon} alt="" />
								<AiFillGithub />
							</div>
							<div className="center">
								<p className="questionText">{help.title}</p>
								<div className="userDetails">
									<p className="by">
										By <span>{help.by}</span>
									</p>
									&nbsp;-&nbsp;<p className="at">{help.time}</p>
								</div>
								<div className="tags">
									<div className={"tag " + getIconStyle(help.type)}>
										{getIcon(help.type)}
									</div>
								</div>
							</div>
							<div className="right">
								{help.solved ? (
									<MdDone className="greenText" />
								) : (
									<MdClose className="redText" />
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Index;
