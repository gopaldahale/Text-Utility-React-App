import React from 'react';
import PropDataType from 'prop-types'

function AlertNotify(props) {
    return (        
            props.alert &&  <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type}</strong> : {props.alert.msg}
                {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
    )
}

export default AlertNotify


