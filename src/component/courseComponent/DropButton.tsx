import { useCourseStore } from "../../store/courseStore";

interface Props {
  id: number;
}

export function DropButton({ id }: Props) {
  const dropCourse = useCourseStore((state) => state.dropCourse);
  return <button onClick={() => dropCourse(id)}>ถอน</button>;
}
