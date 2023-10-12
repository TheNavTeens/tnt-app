import {
  VStack,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Heading
} from '@chakra-ui/react'

import { Container } from '../../components/Container'
import { Banner } from '../../components/Banner'

const E1E3Dashboard = () => {
  return (
    <div>
      <Container height="100vh">
        <Banner /> 
        <Tabs>
          <TabList>
            <Tab>E1</Tab>
            <Tab>E2</Tab>
            <Tab>E3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack overflow="scroll">
                <Heading>E1</Heading>
                <iframe width="800" height="500" frameBorder="0" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSLOWTa8Qo8WWSZ6PZLOTaKOVGia-vdPmqOa3dY2OUkSNvV-G1yN_x7hruLqw0ytj4giXFJAHUtjA5Z/pubchart?oid=803854579&amp;format=interactive"></iframe>
                <iframe width="800" height="500" frameBorder="0" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSLOWTa8Qo8WWSZ6PZLOTaKOVGia-vdPmqOa3dY2OUkSNvV-G1yN_x7hruLqw0ytj4giXFJAHUtjA5Z/pubchart?oid=37917538&amp;format=interactive"></iframe>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack overflow="scroll">
                <Heading>E2</Heading>
                <iframe width="800" height="500" frameBorder="0" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSmFDo1u1WNeF_sQu8VHKPt9sE-763WbzfYzgQYsuIPxn7Wpa9WmtDFrmKdrfKF-P-FK8q-tM2427jb/pubchart?oid=1534404840&amp;format=interactive"></iframe>
                <iframe width="800" height="500" frameBorder="0" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSmFDo1u1WNeF_sQu8VHKPt9sE-763WbzfYzgQYsuIPxn7Wpa9WmtDFrmKdrfKF-P-FK8q-tM2427jb/pubchart?oid=396302033&amp;format=interactive"></iframe>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack overflow="scroll">
                <Heading>E3</Heading>
                <iframe width="800" height="500" frameBorder="0" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQIEnxEqwCNwNj1QzMDOrhwJ4UBaWRvT5_9HImQ585-AFu5tq5rg-s_UHqeeMmPXdqa-3UyS-LZM8BB/pubchart?oid=991987233&amp;format=interactive"></iframe>
                <iframe width="800" height="500" frameBorder="0" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQIEnxEqwCNwNj1QzMDOrhwJ4UBaWRvT5_9HImQ585-AFu5tq5rg-s_UHqeeMmPXdqa-3UyS-LZM8BB/pubchart?oid=458433379&amp;format=interactive"></iframe>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  )
}

export default E1E3Dashboard
