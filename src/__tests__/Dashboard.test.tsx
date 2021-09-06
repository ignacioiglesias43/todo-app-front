import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { ITask } from "../types/task";

import ReduxProvider from "../store/ReduxProvider";
import ToDoTable from "../components/organisms/ToDoTable";

Enzyme.configure({ adapter: new Adapter() });

describe("<ToDoTable />", () => {
  const tasks: ITask[] = [
    {
      id: 1,
      title: "Test",
      content: "Testing",
      status: { id: 1, name: "Completed" },
    },
  ];

  const wrapper = render(
    <ReduxProvider>
      <ToDoTable rows={tasks} />
    </ReduxProvider>
  );

  const table = wrapper.find("table");
  const tbody = table.find("tbody");
  const row = tbody.find("tr");

  it("should contain one element in body", () => {
    expect(row).toHaveLength(tasks.length);
  });
});
