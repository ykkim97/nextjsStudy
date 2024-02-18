export default function Write() {
    return (
        <div>
            <h2>새 글 등록</h2>
            <form action="/api/post/create" method="POST">
                <input type="text" name="title" placeholder="제목"/>
                <input name="content" placeholder="내용"/>
                <button type="submit">등록</button>
            </form>

            {/* <form action="/api/getList" method="POST">
                <button type="submit">글 목록 확인</button>
            </form>

            <form action="/api/getCurrentTime" method="POST">
                <button type="submit">현재시간</button>
            </form> */}
        </div>
    )
}