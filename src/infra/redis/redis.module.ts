import { Global, Module } from '@nestjs/common';

import { EmailVerificationCacheService } from './email-verification-cache.service';
import { PasswordResetCacheService } from './password-reset-cache.service';
import { RedisService } from './redis.service';
import { UserCacheService } from './user-cache.service';

@Global()
@Module({
  providers: [RedisService, UserCacheService, EmailVerificationCacheService, PasswordResetCacheService],
  exports: [RedisService, UserCacheService, EmailVerificationCacheService, PasswordResetCacheService],
})
export class RedisModule {}
