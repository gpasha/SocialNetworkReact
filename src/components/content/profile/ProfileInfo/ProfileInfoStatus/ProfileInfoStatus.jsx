import React, {useState} from 'react';

const ProfileInfoStatus = ( {props} ) => {

    console.log("ProfileInfoStatus props => ", props);

    let [ editMode, setEditMode ] = useState(false);
    let [ status, setStatus ] = useState(props.status);

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    let updateStatusText = (e) => {
        setStatus(e.target.value);
    }

    return (
        <>
            { !editMode &&
                <div className="profile-info__content-status" onDoubleClick={activateEditMode} >{props.profileStatus || 'no status'}</div>
            }
            { editMode &&                                        
                <div className="profile-info__content-status">
                    <input  value={status}
                            onChange={updateStatusText}
                            onBlur={deactivateEditMode}
                            autoFocus={true} />
                </div>
            }
        </>
    )

}

export default ProfileInfoStatus;
