const vaultWarningMap = {
    liquidity: 'Vault-LiquidityWarningTitle',
    lending: 'Vault-LendingWarningTitle',
    generalWarning: 'Vault-GeneralWarningTitle'
  };
  
  export const getVaultWarning = key => {
    if (key in vaultWarningMap) {
      const warning = vaultWarningMap[key];
      return warning;
    } else {
      return vaultWarningMap['generalWarning'];
    }
  };