# Unit tests by the AAA pattern

- :white_check_mark: Do: Structure your tests with 3 well-separated sections Arrange, Act & Assert (AAA). Following this structure guarantees that the reader spends no brain-CPU on understanding the test plan:

- 1st A - Arrange: All the setup code to bring the system to the scenario the test aims to simulate. This might include instantiating the unit under test constructor, adding DB records, mocking/stubbing on objects, and any other preparation code

- 2nd A - Act: Execute the unit under test. Usually 1 line of code

- 3rd A - Assert: Ensure that the received value satisfies the expectation. Usually 1 line of code