// @ts-expect-error

import { DemoSection } from "@/components/demo-section"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('demo-section2@1');

  return (<DemoSection {...content} />);
}
