import { useState } from "react";
import { useCourseStore } from "../../store/courseStore";

export function CourseForm() {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [form, setForm] = useState({
    code: "",
    nameTH: "",
    nameEN: "",
    credit: 0,
    teacher: "",
    grade: "A",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "credit" ? Number(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.code || !form.nameTH) return;
    addCourse(form);
    setForm({ code: "", nameTH: "", nameEN: "", credit: 0, teacher: "", grade: "A" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="code" value={form.code} onChange={handleChange} placeholder="รหัสวิชา" />
      <input name="nameTH" value={form.nameTH} onChange={handleChange} placeholder="ชื่อวิชา (ไทย)" />
      <input name="nameEN" value={form.nameEN} onChange={handleChange} placeholder="ชื่อวิชา (อังกฤษ)" />
      <input type="number" name="credit" value={form.credit} onChange={handleChange} placeholder="หน่วยกิต" />
      <input name="teacher" value={form.teacher} onChange={handleChange} placeholder="อาจารย์ผู้สอน" />
      <select name="grade" value={form.grade} onChange={handleChange}>
        <option>A</option>
        <option>B+</option>
        <option>B</option>
        <option>C+</option>
        <option>C</option>
        <option>D+</option>
        <option>D</option>
        <option>F</option>
      </select>
      <button type="submit">เพิ่มรายวิชา</button>
    </form>
  );
}
