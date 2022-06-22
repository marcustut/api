package model

import (
	"github.com/zeromicro/go-zero/core/stores/cache"
	"github.com/zeromicro/go-zero/core/stores/sqlx"
)

var _ ShortenModel = (*customShortenModel)(nil)

type (
	// ShortenModel is an interface to be customized, add more methods here,
	// and implement the added methods in customShortenModel.
	ShortenModel interface {
		shortenModel
	}

	customShortenModel struct {
		*defaultShortenModel
	}
)

// NewShortenModel returns a model for the database table.
func NewShortenModel(conn sqlx.SqlConn, c cache.CacheConf) ShortenModel {
	return &customShortenModel{
		defaultShortenModel: newShortenModel(conn, c),
	}
}
