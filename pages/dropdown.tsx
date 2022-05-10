import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Dropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="text-white bg-blue-700 px-4 py-2">
        Dropdown
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="bg-gray-500 w-full">
        <DropdownMenu.Item className="py-2 px-4">Item 1</DropdownMenu.Item>
        <DropdownMenu.Item className="py-2 px-4">Item 2</DropdownMenu.Item>
        <DropdownMenu.Item className="py-2 px-4">Item 3</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
