function IdCard(props) {
    return (
        <div className="IdCard">
            <div className="IdImage">
                <img src={props.picture} alt="Headshot" />
            </div>
            <div className="IdInfo">
                <p><b>First Name: </b>{props.firstName}</p>
                <p><b>Last Name: </b>{props.lastName}</p>
                <p><b>Gender: </b>{props.gender}</p>
                <p><b>Height: </b>{props.height} cm</p>
                <p><b>Birth: </b>{props.birth.toDateString()}</p>

            </div>
        </div>
    )
}

export default IdCard