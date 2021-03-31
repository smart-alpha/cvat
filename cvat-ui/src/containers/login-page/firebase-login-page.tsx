// Copyright (C) 2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

import { connect } from 'react-redux';
import LoginFirebaseComponent from 'components/login-page/login-firebase';
import { CombinedState } from 'reducers/interfaces';
import { loginFirebase } from 'actions/auth-actions';

interface StateToProps {
    fetching: boolean;
    renderResetPassword: boolean;
}

interface DispatchToProps {
    onLogin: typeof loginFirebase;
}

function mapStateToProps(state: CombinedState): StateToProps {
    return {
        fetching: state.auth.fetching,
        renderResetPassword: state.auth.allowResetPassword,
    };
}

const mapDispatchToProps: DispatchToProps = {
    onLogin: loginFirebase,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFirebaseComponent);
