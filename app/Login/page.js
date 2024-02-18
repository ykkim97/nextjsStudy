

export default function SignIn() {
    return (
        <div>
            <h2>회원가입</h2>
            <form action="/api/member/create" method="POST">
                <div>
                    <label htmlFor="userId">아이디</label>
                    <input name='userId'></input>
                </div>
                <div>
                    <label htmlFor="id">비밀번호</label>
                    <input name='password' type="password"></input>
                </div>
                <div>
                    <label htmlFor="userName">이름</label>
                    <input name='userName' type="text"></input>
                </div>
                <div>
                    <label htmlFor="userEmail">이메일</label>
                    <input name='userEmail' type="email"></input>
                </div>
                <div>
                    <button>뒤로</button>
                    <button type="submit">회원가입</button>
                </div>
            </form>
        </div>
    )
}

