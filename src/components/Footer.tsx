import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { person, social } from "@/app/resources/content";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      position="relative"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
      style={{ 
        marginTop: "auto",
        minHeight: "80px",
        height: "80px",
        contain: "layout paint style size",
        contentVisibility: "auto"
      }}
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
        style={{
          width: "100%",
          height: "auto",
          contain: "layout paint"
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong" style={{ flexShrink: 0 }}>
          <Text onBackground="neutral-weak">© {currentYear} </Text>
          <Text paddingX="4">{person.name}</Text>
        </Text>
        <Flex gap="16" style={{ flexShrink: 0 }}>
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Flex>
      </Flex>
      <Flex height="80" show="s" style={{ flexShrink: 0, display: "none" }}></Flex>
    </Flex>
  );
};
