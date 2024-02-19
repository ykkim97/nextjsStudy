'use client';

import Link from "next/link";
import DetailLink from "./DetailLink";

export default function ListItem({ result }) {
    return (
        <>
            {result.map((item, index) => (
                <div className="list-item" key={result[index]._id}>
                    <Link href={`/detail/${item._id}`}>
                        <h4>{result[index].title}</h4>
                    </Link>
                    <Link className="list-btn" href={`/edit/${result[index]._id}`} >✏️</Link>
                    <span onClick={(e) => {
                        fetch('/api/post/delete', { method: 'POST', body: result[index]._id }).then(()=>{
                            e.target.parentElement.style.opacity = 0;
                            setTimeout(()=>{
                                e.target.parentElement.style.display = 'none';
                            }, 1000)
                        })
                    }}>🗑️</span>
                    <p>{result[index].content}</p>
                    <p>1월 1일</p>
                </div>
            ))}
        </>
    )
}