import React from 'react';

function People() {
  const peopleList = [
    { id: 1, name: 'Nguyễn Văn A', age: 25 },
    { id: 2, name: 'Trần Thị B', age: 12 },
    { id: 3, name: 'Lê Văn C', age: 16 },
    { id: 4, name: 'Phạm Thị D', age: 22 },
    { id: 5, name: 'Hoàng Văn E', age: 18 },
    { id: 6, name: 'Đỗ Thị F', age: 30 },
    { id: 7, name: 'Vũ Văn G', age: 45 },
    { id: 8, name: 'Bùi Thị H', age: 11 },
    { id: 9, name: 'Đặng Văn I', age: 27 },
    { id: 10, name: 'Hồ Thị K', age: 19 }
  ];

  const firstTeenager = peopleList.find(person => person.age >= 13 && person.age <= 19);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h2>Danh sách người dùng:</h2>
      <ol>
        {peopleList.map(person => (
          <li key={person.id}>
            <strong>Tên:</strong> {person.name} | <strong>Tuổi:</strong> {person.age}
          </li>
        ))}
      </ol>

      <hr />

      <h2>Kết quả tìm kiếm Teenager:</h2>
      {firstTeenager ? (
        <p style={{ color: 'green' }}>
          Đã tìm thấy: <strong>{firstTeenager.name}</strong>, {firstTeenager.age} tuổi (ID: {firstTeenager.id})
        </p>
      ) : (
        <p style={{ color: 'red', fontWeight: 'bold' }}>
          No result
        </p>
      )}
    </div>
  );
}

export default People;