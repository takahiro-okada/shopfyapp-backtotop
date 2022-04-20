import { useState } from "react";
import { Page, Layout, EmptyState } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

export function EmptyStatePage() {
  const [open, setOpen] = useState(false);
  const handleSelection = (resources) => {
    setOpen(false);
    setSelection(resources.selection.map((product)=>product.id))
  }
  return(
    <Page>
      <TitleBar
        primaryAction={{
          content:"商品を選択する",
          onAction:()=>setOpen(true),
        }}
      />
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={open}
        onSelection={(resources)=> handleSelection(resources)}
        onCancel={()=> setOpen(false)}
      />
      <Layout>
        <EmptyState
          heading="一時的に商品を割引します!!!"
          action={{
            content: "商品を選択",
            onAction: () => StereoPannerNode(true),
          }}
          image={img}
          imageContained
        />
        <p>割引商品を選択してください。</p>
      </Layout>
    </Page>
  )
}
