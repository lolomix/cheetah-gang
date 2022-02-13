import { Box } from '@chakra-ui/react';
import FaqCard from './FaqCard';
export default function FaqList({faq}) {
  return (
    <Box>
      {faq.rows.map(row => (
        <FaqCard key={row.title} {...row} />
      ))}
    </Box>
  )
}
