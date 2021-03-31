// Copyright (C) 2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, withRouter } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { Row, Col } from 'antd/lib/grid';
// import firebase from 'firebase';

import LoginForm, { LoginData } from './login-form';
import CookieDrawer from './cookie-policy-drawer';

interface LoginFirebaseComponentProps {
    fetching: boolean;
    renderResetPassword: boolean;
    onLogin: (username: string, password: string) => void;
}
// const firebaseConfig = {
//     apiKey: 'AIzaSyCRA0dVXjYAEDqOYKEUhgeMgcwJXyc9Ne8',
//     authDomain: 'cvat-react-test.firebaseapp.com',
//     projectId: 'cvat-react-test',
//     storageBucket: 'cvat-react-test.appspot.com',
//     messagingSenderId: '38822137775',
//     appId: '1:38822137775:web:55fccace1316af94f6695a',
// };

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

function LoginFirebaseComponent(props: LoginFirebaseComponentProps & RouteComponentProps): JSX.Element {
    const sizes = {
        xs: { span: 14 },
        sm: { span: 14 },
        md: { span: 10 },
        lg: { span: 4 },
        xl: { span: 4 },
    };
    const { fetching, onLogin, renderResetPassword } = props;

    return (
        <>
            <Row justify='center' align='middle'>
                <Col {...sizes}>
                    <Title level={2}> Login </Title>
                    <LoginForm
                        fetching={fetching}
                        onSubmit={(loginData: LoginData): void => {
                            onLogin(loginData.username, loginData.password);
                        }}
                    />
                    <Row justify='start' align='top'>
                        <Col>
                            <Text strong>
                                New to CVAT? Create
                                <Link to='/auth/register'> an account</Link>
                            </Text>
                        </Col>
                    </Row>
                    {renderResetPassword && (
                        <Row justify='start' align='top'>
                            <Col>
                                <Text strong>
                                    <Link to='/auth/password/reset'>Forgot your password?</Link>
                                </Text>
                            </Col>
                        </Row>
                    )}
                </Col>
            </Row>
            <CookieDrawer />
        </>
    );
}

export default withRouter(LoginFirebaseComponent);
