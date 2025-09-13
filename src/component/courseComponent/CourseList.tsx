import { useCourseStore } from "../../store/courseStore";
import { DropButton } from "./DropButton";

export function CourseList() {
  const { courses } = useCourseStore();

  return (
    <div>
      <h2>รายวิชาที่ลงทะเบียน</h2>
      <ul>
        {courses.map((c) => (
          <li key={c.id}>
            {c.code} - {c.nameTH} ({c.credit} หน่วยกิต, เกรด: {c.grade})
            <DropButton id={c.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
