import React from "react";
function isFree(price) {
    if (price == 0) {
        return true;
    }
    return false;
}
function JSXExamples() {
    const greeting = <h1>Hello, React with JSX!!!</h1>
    const name = 'คุณอะไรสักอย่าง';
    const age = 999999999999;

    const currentyear = new Date().getFullYear();

    const user = {
        firstname: 'ชุติพงศ์',
        lastname: 'บูรณกุลกิจการ',
        age: 20,
        hobbies: ['เล่นเกม', 'ฟังเพลง', 'อ่านนิยาย']
    };

    const formatName = (user) => {
        return `${user.firstname} ${user.lastname}`;
    };

    const isLoggedIn = true;
    const hasNotification = 3;

    return (
        <div className="jsx-examples">
            <h1>ตัวอย่างการใช้ JSX</h1>

            {/* === 1. การแสดงผลข้อมูลพื้นฐาน === */}
            <section>
                <h2>📝 การแสดงผลข้อมูล</h2>
                {greeting}
                <p>สวัสดีคุณ {name} อายุ {age} ปี</p>
                <p>ปีนี้คือปี {currentyear}</p>
                <p>ชื่อเต็ม: {formatName(user)}</p>
            </section>

            {/* === 2. การใช้ Attributes === */}
            <section>
                <h2>🎨 Attributes ใน JSX</h2>
                {/* ใช้ className แทน class */}
                <div className="card">
                    <p className="text-primary">ใช้ className แทน class</p>
                </div>

                {/* camelCase attributes */}
                <button
                    onClick={() => alert('หวัดดีครับ กดมาทำไม')}
                    onMouseEnter={() => console.log('เมาส์เข้า')}
                >
                    Hover หรือ Click ดู "No Click!"
                </button>

                {/* style attribute รับ object */}
                <div style={{
                    backgroundColor: '#E8F5E8',
                    padding: '15px',
                    borderRadius: '8px',
                    marginTop: '10px'
                }}>
                    <p style={{ color: '#2D4A2B', fontWeight: 'bold' }}>
                        Inline styles ใช้ object
                    </p>
                </div>
            </section>

            {/* === 3. Conditional Rendering === */}
            <section>
                <h2>🔀 Conditional Rendering</h2>

                {/* ใช้ ternary operator */}
                <p>
                    สถานะ: {isLoggedIn ? '✅ ล็อกอินแล้ว' : '❌ ยังไม่ได้ล็อกอิน'}
                </p>

                {/* ใช้ && operator */}
                {hasNotification > 0 && (
                    <div className="notification">
                        🔔 คุณมี {hasNotification} การแจ้งเตือนใหม่
                    </div>
                )}

                {/* ใช้ if-else ผ่าน function */}
                {(() => {
                    if (user.age >= 18) {
                        return <p>✅ {formatName(user)} เป็นผู้ใหญ่แล้ว</p>;
                    } else {
                        return <p>👶 {formatName(user)} ยังเป็นเด็ก</p>;
                    }
                })()}
            </section>

            {/* === 4. Lists และ Keys === */}
            <section>
                <h2>📋 การแสดงผล Lists</h2>
                <h3>งานอดิเรกของ {user.firstName}:</h3>
                <ul>
                    {user.hobbies.map((hobby, index) => (
                        <li key={index}>
                            {index + 1}. {hobby}
                        </li>
                    ))}
                </ul>

                {/* ตัวอย่างที่ซับซ้อนขึ้น */}
                <div className="product-list">
                    <h3>รายการสินค้า</h3>
                    {[
                        { id: 1, name: 'นิยายยูริ [Fic GuP]บทรักแห่งรถถัง(Yuri)DxK', price: 0, inStock: true, link: "https://writer.dek-d.com/dek-d/writer/view.php?id=2513725", image: "https://pbs.twimg.com/media/C85IDEqVoAAg9_D?format=jpg&name=small" },
                        { id: 2, name: 'นิยาย สารพันปัญหาวุ่นวาย ของยัยแวมไพร์ขี้จุ๊', price: 390, inStock: true, link: "https://www.naiin.com/product/detail/526850", image: "https://storage.naiin.com/system/application/bookstore/resource/product/202311/594988/1000266743_front_XXL.jpg?imgname=%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B8%A7%E0%B8%B2%E0%B8%A2-%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A2%E0%B8%B1%E0%B8%A2%E0%B9%81%E0%B8%A7%E0%B8%A1%E0%B9%84%E0%B8%9E%E0%B8%A3%E0%B9%8C%E0%B8%82%E0%B8%B5%E0%B9%89%E0%B8%88%E0%B8%B8%E0%B9%8A-5" },
                        { id: 3, name: 'ภาพวาด Moca x Ran', price: 9999999999999999999, inStock: false, link: "https://danbooru.donmai.us/posts/4144332", image: "https://cdn.donmai.us/sample/98/4b/__mitake_ran_and_aoba_moca_bang_dream_drawn_by_mochikayu__sample-984bdca4483a1b1a6f173cc661dd63be.jpg" }
                    ].map(product => (
                        <div key={product.id} className="product-item">
                            <div>
                                <a href={product.link} target="_blank" rel={product.name}>
                                    <img src={product.image} alt={product.name} style = {{width: "150px", height: "auto"}}/>
                                </a>
                            </div>
                            <div>
                                
                                <span>{product.name}</span>
                                <span> - ฿{isFree(product.price) ? "Free" : product.price}</span>
                                <span className={product.inStock ? 'in-stock' : 'out-stock'}>
                                    {product.inStock ? ' ✅ มีสินค้า' : ' ❌ สินค้าหมด'}
                                </span>
                                <span>, <a href={product.link} target="_blank" rel={product.name}>
                                    {product.link}
                                    </a> 
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* === 5. Fragment === */}
            <section>
                <h2>🧩 React Fragment</h2>
                <p>ใช้เมื่อไม่ต้องการ wrapper element:</p>
                {/* Fragment แบบเต็ม */}
                <React.Fragment>
                    <h3>หัวข้อ</h3>
                    <p>เนื้อหา</p>
                </React.Fragment>

                {/* Fragment แบบย่อ */}
                <>
                    <h3>หัวข้ออื่น</h3>
                    <p>เนื้อหาอื่น</p>
                </>
            </section>

            {/* === 6. การจัดการ Events === */}
            <section>
                <h2>🎯 Event Handling ใน JSX</h2>
                <input
                    type="text"
                    placeholder="พิมพ์อะไรก็ได้..."
                    onChange={(e) => console.log('พิมพ์:', e.target.value)}
                />

                <select onChange={(e) => alert(`เลือก: ${e.target.value}`)}>
                    <option value="">-- เลือกภาษา --</option>
                    <option value="js">JavaScript</option>
                    <option value="py">Python</option>
                    <option value="java">Java</option>
                    <option value="go">Go</option>
                </select>
            </section>

            {/* === 7. Comments ใน JSX === */}
            <section>
                <h2>💬 Comments ใน JSX</h2>
                {/* นี่คือ comment ใน JSX */}
                <p>Comment ใน JSX ต้องอยู่ใน {/* curly braces */}</p>
                {
                    // นี่ก็เป็น comment เช่นกัน
                    // แต่อยู่ใน JavaScript expression
                }
            </section>
        </div>
    )
}
export default JSXExamples